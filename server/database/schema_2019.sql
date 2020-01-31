-- CREATE DATABASE ordersjamdb;
USE ordersjamdb;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS workers;
SET FOREIGN_KEY_CHECKS = 1;

-- Table orders
-- **********************************************************
CREATE TABLE orders (
 orderId varchar(100) NOT NULL, 
 title varchar(100) NOT NULL,
 description varchar(100) NOT NULL,
 deadline varchar(100) NOT NULL, 
 PRIMARY KEY(`orderId`),
 UNIQUE KEY `orderId` (`orderId`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table entitydatabases
-- **********************************************************
CREATE TABLE workers (
 workerId varchar(100) NOT NULL, 
 name varchar(100) NOT NULL,
 company varchar(100) NOT NULL,
 email varchar(100) NOT NULL, 
 PRIMARY KEY(`workerId`),
 UNIQUE KEY `workerId` (`workerId`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Intersection Table for many to many relation
-- **********************************************************
CREATE TABLE ordersAndWorkers (
 id varchar(100) NOT NULL, 
 workerId varchar(100) NOT NULL, 
 orderId varchar(100) NOT NULL, 
 PRIMARY KEY(`id`),
 UNIQUE KEY `id` (`id`),
 CONSTRAINT `fk_i_o` FOREIGN KEY (`orderId`) REFERENCES `orders` (`orderId`) ON DELETE CASCADE,
 CONSTRAINT `fk_i_w` FOREIGN KEY (`workerId`) REFERENCES `workers` (`workerId`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dummy Records
-- **************************************************************************************************************************************

insert into orders (orderId,title,description,deadline) values(uuid(),'o1','uyt','3');
insert into orders (orderId,title,description,deadline) values(uuid(),'o2','gh','33');
insert into orders (orderId,title,description,deadline) values(uuid(),'o3','tyu','66');
insert into orders (orderId,title,description,deadline) values(uuid(),'o4','ry','677');

insert into workers (workerId,orderId,name,company,email) values(uuid(),null,'w1','qew','akak');
insert into workers (workerId,orderId,name,company,email) values(uuid(),null,'w2','greatest','flfl');
insert into workers (workerId,orderId,name,company,email) values(uuid(),null,'w3','hjhgf','gjgj');
insert into workers (workerId,orderId,name,company,email) values(uuid(),null,'w4','bn','ffhjfj');

-- w1 -> o3
insert into ordersandworkers (id,workerId,orderId) values(uuid(),'6e88d5c8-4398-11ea-bcd1-847beb52e09f','688ff15a-4398-11ea-bcd1-847beb52e09f');
-- w1 -> o2
insert into ordersandworkers (id,workerId,orderId) values(uuid(),'6e88d5c8-4398-11ea-bcd1-847beb52e09f','688dca46-4398-11ea-bcd1-847beb52e09f');
-- w1 -> o4
insert into ordersandworkers (id,workerId,orderId) values(uuid(),'6e88d5c8-4398-11ea-bcd1-847beb52e09f','6891fc86-4398-11ea-bcd1-847beb52e09f');
-- w2 -> o3
insert into ordersandworkers (id,workerId,orderId) values(uuid(),'6e8c3495-4398-11ea-bcd1-847beb52e09f','688ff15a-4398-11ea-bcd1-847beb52e09f');

-- Use Full Queries
-- **************************************************************************************************************************************

-- get orders for particular worker
 select o.title as 'orders' from orders o 
 INNER JOIN ordersandworkers ow ON ow.orderId = o.orderId
where ow.workerId = '6e88d5c8-4398-11ea-bcd1-847beb52e09f'
ORDER BY  o.deadline ASC;

-- get workers for particular order
 select w.name as 'workers' from workers w 
 INNER JOIN ordersandworkers ow ON ow.workerId = w.workerId
where ow.orderId = '688ff15a-4398-11ea-bcd1-847beb52e09f';


-- get available(vacant) workers for particular order
select name from workers where name NOT IN (
select w.name as 'workers' from workers w 
 INNER JOIN ordersandworkers ow ON ow.workerId = w.workerId
where ow.orderId = '688ff15a-4398-11ea-bcd1-847beb52e09f'
);

-- get available(vacant) orders for particular worker to choose
select title from orders where title NOT IN (
select o.title as 'orders' from orders o 
 INNER JOIN ordersandworkers ow ON ow.orderId = o.orderId
where ow.workerId = '6e88d5c8-4398-11ea-bcd1-847beb52e09f'
);

-- get total workers assigned to an order
select o.title as 'order', count(ow.workerId) as 'num workers' from orders o INNER JOIN ordersandworkers ow ON ow.orderId = o.orderId  
where ow.orderId = '688ff15a-4398-11ea-bcd1-847beb52e09f' group by o.orderId;
