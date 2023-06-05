# rarbg-db-dumps

> "I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced. I fear something terrible has happened."

rarbg.to closed this week on Wenesday, May 31, 2023 (2023-05-31).

I've been collecting databases containing magnet links and torrent metadata since 2019 or so.

I had to stop collecting detailed torrent info for all sections except XXX due to my ISP threatening me, even for only collecting metadata (the complaint filing systems of the *AA organizations don't differentiate between real downloaders and metadata-only downloaders).

Anyhow, here are SQLite and Postgres dumps of everything I have relating to rbg.  Their API used to be incredibly good until it broke a year or two ago, so there is even decent coverage going all the way back to 2006.

I hope this will be interesting and useful to folks.  As far as I'm aware, this is the largest and most complete public public rbg dataset archive in existence.

| Database                        | Type     | Record Count | First      | Last       |
| ------------------------------- | -------- | ------------ | ---------- | ---------- |
| rbg-rls.db                      | SQLite   | 784813       | 2007-06-07 | 2023-05-31 |
| rbg-rls-v2.db                   | SQLite   | 687204       | 2007-07-15 | 2023-05-31 |
| pretime.rbg_magnet_metadata.sql | Postgres | 257696       | 2021-11-18 | 2023-05-31 |

Enjoy!

Sincerely yours,

@Sleaze

p.s. Pull-requests and questions are most appreciated and welcome!

## Dataset Info and Stats

### rbg-rls.db

Source: Rarbg RSS XML feed (https://rarbg.to/rssdd_magnet.php)

Schema:

```sql
CREATE TABLE "release" (
    id STRING PRIMARY KEY,
    name TEXT,
    time TEXT,
    epoch INTEGER,
    files TEXT,
    tags TEXT,
    detail_link TEXT,
    magnet TEXT
);
```

Record distribution:

| Year | Count  |
| ---- | ------ |
| 2007 |      4 |
| 2008 |     14 |
| 2009 |    167 |
| 2010 |     35 |
| 2011 |     63 |
| 2012 |    201 |
| 2013 |    421 |
| 2014 |    316 |
| 2015 |    185 |
| 2016 |    213 |
| 2017 |    156 |
| 2018 |    430 |
| 2019 |    525 |
| 2020 | 136430 |
| 2021 | 265032 |
| 2022 | 269122 |
| 2023 | 111649 |

### rbg-rls-v2.db

Source: Rarbg JSON API

Schema:

```sql
CREATE TABLE release (
    id STRING PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    time TEXT NOT NULL,
    epoch INTEGER NOT NULL,
    ranked INTEGER NOT NULL,
    size INTEGER,
    tags TEXT,
    metadata TEXT,
    magnet TEXT NOT NULL
);
```

Record distribution:

| Year | Count  |
| ---- | ------ |
| 2007 |      2 |
| 2008 |     27 |
| 2009 |     36 |
| 2010 |     53 |
| 2011 |    317 |
| 2012 |  14222 |
| 2013 |  34451 |
| 2014 |  36582 |
| 2015 |  35714 |
| 2016 |  37323 |
| 2017 |  42813 |
| 2018 |  48348 |
| 2019 |  56419 |
| 2020 | 105135 |
| 2021 | 153566 |
| 2022 |  51593 |
| 2023 |  70603 |

### pretime.rbg_magnet_metadata.sql

Source: Torrent Swarms

Schema:

```sql
CREATE TABLE public.rbg_magnet_metadata (
    id character varying(40) NOT NULL,
    display_name character varying(256) NOT NULL,
    dir_name character varying(256) NOT NULL,
    size bigint NOT NULL,
    num_files integer NOT NULL,
    files text NOT NULL,
    magnet_url text NOT NULL,
    pretime timestamp without time zone NOT NULL,
    epoch bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
```

Record distribution:

| Year | Count  |
| ---- | ------ |
| 2021 | 143902 |
| 2022 |  83445 |
| 2023 |  30349 |

