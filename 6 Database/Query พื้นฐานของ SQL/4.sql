select distinct s.sname
from sailors s
    left join reserves r on s.sid = r.sid
    left join boats b on r.bid = b.bid
where b.color = "red";