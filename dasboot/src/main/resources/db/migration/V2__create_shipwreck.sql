CREATE TABLE SHIPWRECK(
    id int AUTO_INCREMENT,
    name VARCHAR2(255),
    description VARCHAR2(2000),
    condition VARCHAR2(255),
    depth int,
    latitude DOUBLE,
    longitude DOUBLE,
    year_discovered int
)