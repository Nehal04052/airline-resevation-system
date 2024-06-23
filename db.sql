use `airline_reservation_system`;

CREATE TABLE flights (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Search_Date text,
  Departure_Date text,
  Days_fly INT,
  origin text,
  destination text,
  deptime text,
  arrtime text,
  flightno text,
  airline text,
  Total_fare int,
  seats_avail int,
  seatingclass text,
  duration text,
  stops int,
  stop1 text,
  stop2 text
);

-- Create the table for passengers
CREATE TABLE passengers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  address VARCHAR(100) NOT NULL
);

-- Create the table for reservations
CREATE TABLE reservations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  flight_id INT NOT NULL,
  passenger_id INT NOT NULL,
  reservation_date DATETIME NOT NULL,
  FOREIGN KEY (flight_id) REFERENCES flights(id),
  FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);