select distinct r.sid
from reserves r
    left join boats b on r.bid = b.bid
where b.color = "red";