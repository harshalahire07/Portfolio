export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-restful-apis-django-rest-framework",
    title: "Building Production-Ready REST APIs with Django REST Framework",
    excerpt:
      "A deep dive into designing scalable, secure REST APIs using DRF — covering ViewSets, serializers, custom permissions, and JWT authentication.",
    date: "2025-01-15",
    readTime: "8 min read",
    tags: ["Django", "REST API", "Python", "Backend"],
    featured: true,
    content: `
## Introduction

Django REST Framework (DRF) is the gold standard for building REST APIs in Python. In this post, I'll walk through the key architectural decisions I made while building production APIs at SPARD Technologies.

## ViewSets vs APIViews

The first decision is always: ViewSet or APIView? For CRUD-heavy resources, ViewSets with routers are far cleaner:

\`\`\`python
from rest_framework import viewsets, permissions
from .models import Asset
from .serializers import AssetSerializer

class AssetViewSet(viewsets.ModelViewSet):
    queryset = Asset.objects.select_related('location', 'category')
    serializer_class = AssetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        qs = super().get_queryset()
        if self.request.user.role == 'staff':
            return qs.filter(assigned_to=self.request.user)
        return qs
\`\`\`

## Custom Permission Classes

Role-based access control is non-negotiable in facility management:

\`\`\`python
class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return request.user.is_authenticated
        return request.user.is_authenticated and request.user.role == 'admin'
\`\`\`

## Serializer Depth vs Explicit Fields

Avoid \`depth = n\` in production. Explicit nested serializers give you control over exactly what gets exposed:

\`\`\`python
class AssetSerializer(serializers.ModelSerializer):
    location = LocationMinimalSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    
    class Meta:
        model = Asset
        fields = ['id', 'name', 'status', 'location', 'category', 'updated_at']
\`\`\`

## Key Takeaways

- Use \`select_related\` and \`prefetch_related\` to avoid N+1 queries
- Always implement pagination via \`PageNumberPagination\`
- Keep serializers thin — business logic belongs in services or model methods
- Write tests for every endpoint, especially permission boundaries

Building APIs this way at SPARD taught me that API design is fundamentally about control — controlling what data gets exposed, who can access it, and how it performs at scale.
    `,
  },
  {
    slug: "iot-mqtt-django-real-time-data",
    title:
      "Streaming IoT Sensor Data to Django via MQTT: Lessons from Hydroponics",
    excerpt:
      "How I connected ESP32 sensors to a Django backend using MQTT and built a real-time dashboard — and what I learned building an award-winning IoT system.",
    date: "2025-02-01",
    readTime: "10 min read",
    tags: ["IoT", "MQTT", "Django", "ESP32", "Real-time"],
    featured: true,
    content: `
## The Problem

Traditional polling-based architectures fail for sensor networks. When you have 8 sensors reporting every 2 seconds, HTTP polling creates enormous overhead. MQTT was the obvious choice.

## Architecture Overview

\`\`\`
ESP32 Sensors → MQTT Broker (Mosquitto) → Django Consumer → WebSocket → Dashboard
\`\`\`

## ESP32 Publisher

\`\`\`cpp
#include <PubSubClient.h>
#include <ArduinoJson.h>

void publishSensorData() {
  StaticJsonDocument<200> doc;
  doc["ph"] = readPH();
  doc["temp"] = readTemp();
  doc["humidity"] = readHumidity();
  doc["ec"] = readEC();
  doc["timestamp"] = millis();
  
  char buffer[256];
  serializeJson(doc, buffer);
  client.publish("hydroponics/sensors", buffer);
}
\`\`\`

## Django MQTT Consumer

\`\`\`python
import paho.mqtt.client as mqtt
import json
from .models import SensorReading

def on_message(client, userdata, msg):
    data = json.loads(msg.payload.decode())
    SensorReading.objects.create(
        ph=data['ph'],
        temperature=data['temp'],
        humidity=data['humidity'],
        ec=data['ec'],
    )
    check_thresholds(data)  # trigger relay control
\`\`\`

## Threshold-Based Relay Control

The automated relay system was the most impactful feature:

\`\`\`python
def check_thresholds(data):
    if data['ph'] < 5.5 or data['ph'] > 7.0:
        trigger_relay('ph_pump', data['ph'])
        send_alert(f"pH out of range: {data['ph']}")
    
    if data['ec'] < 1.2:
        trigger_relay('nutrient_pump')
\`\`\`

## What Won Us 1st Prize

The judges were impressed by the **end-to-end automation** — no human intervention needed once thresholds were configured. The dashboard showed real-time charts, historical trends, and automated action logs.

## Lessons Learned

1. **MQTT QoS levels matter** — use QoS 1 for sensor data to ensure at-least-once delivery
2. **Batch database writes** — don't write every reading immediately; batch in 5-second windows
3. **Always have a manual override** — automated systems need kill switches
4. **WebSockets + Django Channels** scale better than polling for dashboards
    `,
  },
  {
    slug: "postgresql-optimization-django-orm",
    title: "PostgreSQL Query Optimization Patterns with Django ORM",
    excerpt:
      "Practical techniques to eliminate N+1 queries, use database indexes effectively, and profile slow queries in production Django applications.",
    date: "2025-02-20",
    readTime: "7 min read",
    tags: ["PostgreSQL", "Django", "Performance", "Database"],
    content: `
## Why This Matters

A slow database query in production can silently kill user experience. After migrating our facility management system from SQLite to PostgreSQL, I had to optimize queries handling thousands of assets and work orders.

## The N+1 Problem

The classic ORM trap:

\`\`\`python
# BAD: N+1 — 1 query for assets + N queries for each location
assets = Asset.objects.all()
for asset in assets:
    print(asset.location.name)  # New query each time!

# GOOD: 2 queries total
assets = Asset.objects.select_related('location', 'category').all()
\`\`\`

For ManyToMany and reverse FK relations, use \`prefetch_related\`:

\`\`\`python
work_orders = WorkOrder.objects.prefetch_related(
    'assigned_staff',
    'asset__location',
).filter(status='open')
\`\`\`

## Database Indexes

Strategic indexing is the single highest-leverage optimization:

\`\`\`python
class Asset(models.Model):
    name = models.CharField(max_length=200)
    status = models.CharField(max_length=20, db_index=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    
    class Meta:
        indexes = [
            models.Index(fields=['status', 'location']),  # Composite index
            models.Index(fields=['-created_at']),  # Descending for recent-first queries
        ]
\`\`\`

## Query Profiling with Django Debug Toolbar

In development, enable query profiling:

\`\`\`python
# settings.py (DEBUG only)
if DEBUG:
    INSTALLED_APPS += ['debug_toolbar']
    MIDDLEWARE = ['debug_toolbar.middleware.DebugToolbarMiddleware'] + MIDDLEWARE
\`\`\`

For production, use \`django-silk\` or log slow queries:

\`\`\`python
LOGGING = {
    'loggers': {
        'django.db.backends': {
            'level': 'DEBUG',
            'handlers': ['sql_handler'],
        },
    },
}
\`\`\`

## \`only()\` and \`defer()\` for Heavy Fields

When you don't need all fields, be explicit:

\`\`\`python
# Only fetch what the list view needs
assets = Asset.objects.only('id', 'name', 'status', 'location_id')

# Defer large text fields
reports = Report.objects.defer('full_content', 'raw_data')
\`\`\`

## Key Takeaways

- Profile before optimizing — measure real query counts with DDT
- \`select_related\` for ForeignKey, \`prefetch_related\` for M2M and reverse FK
- Composite indexes for multi-column filter conditions
- Avoid \`len(queryset)\` — use \`.count()\` for counting
- Use \`.exists()\` instead of \`.count() > 0\` for boolean checks
    `,
  },
];
