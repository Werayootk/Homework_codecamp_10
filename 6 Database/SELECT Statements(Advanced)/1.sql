select a.account_number
from branch b
    left join account a on b.branch_name = a.branch_name
where b.branch_city = "riverside";