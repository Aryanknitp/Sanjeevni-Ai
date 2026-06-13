# 🫀 Sanjeevni - Smart Organ Donation & Transplant Coordination Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/GeoSpatial-Matching-blue?style=for-the-badge" />
</p>

---

## 📖 Overview

**Sanjeevni** is an AI-powered **Organ Donation and Transplant Coordination Platform** designed to bridge the gap between **Organ Donors**, **Recipients**, **Hospitals**, and **Administrators**.

The platform uses **GeoSpatial algorithms** to identify the nearest eligible hospitals and transplant centers, minimizing transportation time and improving the chances of successful organ transplantation. It provides a secure and transparent ecosystem where donors, recipients, and hospitals can connect in real time.

---

## 🎯 Problem Statement

Finding a compatible organ donor and coordinating with nearby transplant hospitals is a complex and time-critical process. Traditional systems often suffer from:
- Delayed donor-recipient matching.
- Lack of centralized hospital coordination.
- Inefficient distance-based allocation.
- Poor transparency and communication.

**Sanjeevni** addresses these challenges by integrating **GeoSpatial matching**, **real-time notifications**, and **smart hospital discovery**.

---

## ✨ Key Features

### 👤 Normal User
- Secure Registration & Login
- Organ Donation Pledge
- View Organ Donation Awareness Resources
- Search Nearby Registered Hospitals
- Track Donation Status
- Update Medical Profile

### ❤️ Donor
- Register as an Organ Donor
- Select Organs Available for Donation
- Manage Consent & Availability
- View Donation Requests
- Receive Emergency Notifications
- Maintain Donation History

### 🏥 Hospital
- Hospital Registration & Verification
- Manage Organ Inventory & Requests
- Accept or Reject Matching Requests
- Coordinate with Donors & Recipients
- Live Geo-location Tracking
- Dashboard Analytics

### 🩺 Recipient
- Create Organ Requirement Requests
- Upload Medical Documents
- View Nearby Matching Hospitals
- Track Request Progress
- Get Real-Time Updates

### 🛡️ Admin
- Verify Hospitals and Users
- Manage Organ Requests
- Monitor Platform Activities
- Approve/Reject Hospital Registration
- Generate Reports & Analytics
- Handle Emergency Cases

---

# 🌍 GeoSpatial Matching System

One of the core innovations of **Sanjeevni** is its **GeoSpatial-based Organ Matching Engine**.

### Workflow
1. Recipient submits an organ request.
2. The system identifies compatible donors.
3. GeoSpatial queries calculate the nearest transplant hospitals.
4. Distance and travel time are optimized.
5. Hospitals receive notifications instantly.
6. Donor, recipient, and hospital are connected securely.

### GeoSpatial Features
- 📍 Nearby Hospital Discovery
- 🗺️ Radius-based Search
- 🚑 Distance Optimization
- ⚡ Fast Emergency Allocation
- 📊 Location-Based Analytics

---

# 🏗️ System Architecture

```text
                    +----------------------+
                    |       Admin          |
                    +----------+-----------+
                               |
        -------------------------------------------------
        |                      |                        |
        |                      |                        |
+-------v-------+     +--------v-------+      +---------v--------+
|    Donor      |     |   Recipient    |      |    Hospital      |
+-------+-------+     +--------+--------+      +---------+--------+
        |                      |                         |
        +-----------+----------+-----------+-------------+
                    |                      |
                    v                      v
          +----------------------------------------+
          |     Sanjeevni Backend (FastAPI)         |
          | GeoSpatial Engine + Matching Algorithm  |
          +------------------+----------------------+
                             |
                             v
                +-------------------------------+
                | MongoDB + GeoSpatial Indexing  |
                +-------------------------------+
```

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | Next.js 15, React.js, Tailwind CSS |
| Backend | FastAPI (Python) |
| Database | MongoDB |
| Authentication | JWT |
| GeoSpatial Engine | MongoDB 2dsphere Index |
| Maps & Location | Google Maps API / OpenStreetMap |
| Notifications | Email & Push Notifications |
| Deployment | Vercel + Railway/Render |

---

# 📂 Project Structure

## 🎨 Frontend (Next.js)

```text
frontend/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   │
│   ├── dashboard/
│   │   ├── admin/
│   │   ├── donor/
│   │   ├── recipient/
│   │   └── hospital/
│   │
│   ├── donor/
│   ├── recipient/
│   ├── hospital/
│   ├── organ-request/
│   ├── map/
│   ├── profile/
│   ├── notifications/
│   ├── about/
│   ├── contact/
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── ui/
│   ├── navbar/
│   ├── footer/
│   ├── map/
│   ├── dashboard/
│   ├── cards/
│   └── forms/
│
├── services/
│   ├── auth.js
│   ├── donor.js
│   ├── recipient.js
│   ├── hospital.js
│   ├── geospatial.js
│   └── admin.js
│
├── hooks/
├── context/
├── lib/
├── utils/
├── public/
├── styles/
├── middleware.js
├── package.json
└── README.md
```

---

## ⚙️ Backend (FastAPI)

```text
backend/
│
├── app/
│   ├── api/
│   │   └── routes/
│   │       ├── auth.py
│   │       ├── users.py
│   │       ├── donors.py
│   │       ├── recipients.py
│   │       ├── hospitals.py
│   │       ├── organ_requests.py
│   │       ├── geospatial.py
│   │       ├── notifications.py
│   │       └── admin.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── database.py
│   │   └── security.py
│   │
│   ├── models/
│   │   ├── user.py
│   │   ├── donor.py
│   │   ├── recipient.py
│   │   ├── hospital.py
│   │   ├── organ_request.py
│   │   └── notification.py
│   │
│   ├── schemas/
│   ├── services/
│   │   ├── auth_service.py
│   │   ├── donor_service.py
│   │   ├── recipient_service.py
│   │   ├── hospital_service.py
│   │   ├── geospatial_service.py
│   │   ├── matching_service.py
│   │   └── notification_service.py
│   │
│   ├── utils/
│   ├── middleware/
│   ├── ai/
│   │   ├── distance_calculator.py
│   │   ├── hospital_recommender.py
│   │   └── donor_matching.py
│   │
│   └── main.py
│
├── tests/
├── uploads/
├── requirements.txt
├── .env
└── README.md
```

---

# 🗄️ Database Collections

```text
users
donors
recipients
hospitals
organ_requests
organ_inventory
notifications
admins
medical_records
location_data
```

---

# 🔄 Working Flow

```text
Donor Registration
        │
        ▼
Store Donor + Location
        │
        ▼
Recipient Creates Organ Request
        │
        ▼
GeoSpatial Matching Engine
        │
        ├────────► Find Nearby Hospitals
        │
        ├────────► Find Compatible Donors
        │
        └────────► Calculate Shortest Distance
        │
        ▼
Notify Hospital + Donor + Recipient
        │
        ▼
Hospital Verification & Transplant Coordination
```

---

# 📍 GeoSpatial Query Example

```javascript
db.hospitals.createIndex({
  location: "2dsphere"
});

db.hospitals.find({
  location: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      $maxDistance: 50000
    }
  }
});
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/sanjeevni.git
cd sanjeevni
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux / Mac
source venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

# 🔮 Future Enhancements

- 🤖 AI-Based Organ Matching
- 🧠 ML Model for Organ Demand Prediction
- 🚑 Ambulance Tracking Integration
- 📱 Mobile Application
- 🌐 Government Hospital API Integration
- 📊 Real-Time Analytics Dashboard
- 🔔 SMS & WhatsApp Alerts
- 🗺️ Interactive GIS Visualization

---

# 👨‍💻 Team

**Project Name:** Sanjeevni  
**Domain:** Healthcare Technology / Organ Donation  
**Built With:** ❤️ Next.js + FastAPI + MongoDB + GeoSpatial Computing

---

## ❤️ Mission

> **"Every organ donated is a second chance at life. Sanjeevni leverages technology and geospatial intelligence to connect donors, recipients, and hospitals faster than ever before."**
