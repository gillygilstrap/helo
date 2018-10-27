insert into users (username, password, profile_pic) values 
(${username}, ${password}, ${profile_pic}) returning *;









-- insert into users (auth0_id, email, name, picture) values
-- (${auth0_id}, ${email}, ${name}, ${picture}) returning *;