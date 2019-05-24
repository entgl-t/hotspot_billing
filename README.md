# Hotspot Billing System

The Hotspot billing system was designed to provide metered Internet access and charge users in real time.
The software interface with networking equipment to collect usage data and to control Internet access. 
Wi-Fi hotspot billing system based on Chillispot open source captive portal with RADIUS AAA-protocol .
Server part run on Linux. PostgreSQL DBMS is used to store data and stored procedures.

## Requirements:

- PHP >= 5.6
- Laravel Framework >= 5.1
- FreeRADIUS server
- PostgreSQL 9.3
- PL\pgSQL
- WAN-router with dd-wrt firmware
- Chillispot captive portal

## Configuration:


To setup client side captive portal one can refer to example below 

![Alt text](/chilli_client_conf/Chilli_conf.png)

## Captive portal:

![Alt text](/chilli_client_conf/LoginPage.png)


## Resources:
- https://freeradius.org/documentation
- http://www.chillispot.org
