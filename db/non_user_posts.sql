select *
from posts p
join users u
on u.id = p.author_id
where p.author_id != ${id};