Hotspot Billing System
======================

The Hotspot billing system was designed to provide metered Internet access and charge users in real time.
The software interface with networking equipment to collect usage data and to control Internet access. 
Wi-Fi hotspot billing system based on Chillispot open source captive portal with RADIUS AAA-protocol .
Server part run on Linux. PostgreSQL DBMS is used to store data and stored procedures.

Requirements
-------------

- PHP >= 5.6
- Laravel Framework >= 5.1
- FreeRADIUS server
- PostgreSQL 9.3
- PL\pgSQL
- WAN-router with dd-wrt firmware
- Chillispot captive portal

Configuration
-------------

To setup client side captive portal one can refer to example below 

![Alt text](/chilli_client_conf/Chilli_conf.png)

Captive portal
---------------

![Alt text](/chilli_client_conf/LoginPage.png)


Licence
-------

> The MIT License (MIT)
>
> Copyright (c) 2016 Doniyor Tropmann
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.


 References
------------

- https://freeradius.org/documentation
- http://www.chillispot.org
--
