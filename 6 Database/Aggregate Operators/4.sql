select sname
from sailors s1
where s1.age = (
        select max(s.age)
        from sailors s
    );