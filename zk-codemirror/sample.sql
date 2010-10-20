create table if not exists table1(
  a  bigint(13) not null primary key,
  b  char(4)    not null,
  c  char(50)   not null,
  d  int(9)     not null,
);

insert into table1 values (1234567890123, "b", "c", 0);

select from_unixtime(a/1000), b, c, min(d) as `using`
  from table1 t1
  left join table2 t2 using (a)
  -- inner join table3 t3 on t3._a = t1.a
  join (
    select a, b, c
    from data
  ) as foo on foo.a = t1.a

  where a &gt; 10
  and b like '%foo'
  or c = 3.14159
  and d &lt; -15.7
  order by 1 desc
;

select @total := sum(d) from data;