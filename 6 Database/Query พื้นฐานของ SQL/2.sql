select s.sname
from sailors s
    left join reserves r on s.sid = r.sid
where r.bid = 103;