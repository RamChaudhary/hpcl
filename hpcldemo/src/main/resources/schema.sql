drop table if exists TruckInfo;
CREATE TABLE TruckInfo (  
Truck_id varchar(50) not null primary key,
driver_name varchar(20) not null,
Company varchar(50),
Address varchar(250),
Card NUMBER,
Card_Status VARCHAR,
Entry_Date Date,
Exit_Date Date
); 

drop table if exists Customer;
Create table Customer(
Customer_id NUMBER not null primary key,
Customer_name varchar(250) not null,
Customer_address varchar(300)
);

drop table if exists Driver;
Create table Driver(
Driver_id varchar(50) not null primary key,
Driver_name varchar(250) not null,
Driver_address varchar(300)
);

drop table if exists Recipe_details;
Create table Recipe_details(
RECEIPE_ID NUMBER not null primary key,
fuel varchar(250) not null,
blender varchar(300),
additive varchar(100)
);

drop table if exists INDENT;
Create table INDENT(
INDENT_ID NUMBER not null primary key,
CUSTOMER_ID NUMBER not null,
QUANTITY NUMBER not null,
RECEIPE_ID NUMBER
);