# past-8-years

## Source

magnet:?xt=urn:btih:ulfihylx35oldftn7qosmk6hkhsjq5af&dn=rarbg_db.zip&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce

(Discovered via the [comments in my Reddit post](https://www.reddit.com/r/trackers/comments/140ks0j/largest_public_rarbg_torrent_database_dump/)-> https://old.reddit.com/r/PiratedGames/comments/13wjasv/rarbg_torrents_shut_down/jmd5sbf/) - thank you /u/frozenpandaman!

## Schema

```sql
CREATE TABLE IF NOT EXISTS "items" (
    `id`    INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    `hash`  TEXT NOT NULL UNIQUE,
    `title` TEXT NOT NULL,
    `dt`    TEXT NOT NULL,
    `cat`   TEXT NOT NULL,
    `size`  INTEGER,
    `ext_id`        TEXT,
    `imdb`  TEXT
);
```

## DB Stats

| Year | Count  |
| ---- | ------ |
| 2007 |   9691 |
| 2008 |  23751 |
| 2009 |  18699 |
| 2010 |  25715 |
| 2011 |  49015 |
| 2012 | 102570 |
| 2013 | 176003 |
| 2014 | 217855 |
| 2015 | 204541 |
| 2016 | 220476 |
| 2017 | 235374 |
| 2018 | 270960 |
| 2019 | 319705 |
| 2020 | 287172 |
| 2021 | 291272 |
| 2022 | 272801 |
| 2023 | 118091 |

