EDA
-----
SELECT * FROM SPOTIFY LIMIT 10 ;

SELECT COUNT(*) FROM SPOTIFY;

SELECT DISTINCT album_type from spotify;

select count(DISTINCT album) from spotify;

--------------
Easy Level
--------------
--Q.1. Retrieve the names of all tracks that have more than 1 billion streams.

select track from spotify                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
where stream > 100000000;

--Q.2.List all albums along with their respective artists.                                                                                                    

SELECT  Distinct album, artist from spotify 
order by 1;


--Q.3 Get the total number of comments for tracks where licensed = TRUE.

SELECT sum(comments) as total_comments
from spotify
where licensed = 'true';


--Q.4 Find all tracks that belong to the album type single.

select track from spotify
where album_type = 'single' ;

--Q.5 Count the total number of tracks by each artist.

SELECT  artist, count(track) from spotify
group by artist 
order by 2 asc;

----------------
--Medium Level
----------------
--Q.6 Calculate the average danceability of tracks in each album.

SELECT
 album, 
 AVG(danceability) as avg 
FROM spotify
GROUP BY album
ORDER BY 2 DESC;



--Q.7 Find the top 5 tracks with the highest energy values.

SELECT track, energy from spotify
order by energy desc
limit 5;

--Q.8 List all tracks along with their views and likes where official_video = TRUE.


SELECT 
	track,
	views,
	likes
FROM spotify
where official_video = 'true'

--Q.9 For each album, calculate the total views of all associated tracks.

SELECT album,
SUM(views) AS total_views
FROM spotify
GROUP BY album
ORDER BY total_views DESC;

--Q.10 Retrieve the track names that have been streamed on Spotify more than YouTube.

SELECT track FROM spotify 
WHERE most_played_on = 'Spotify';



--Q 11. List the top 3 albums with the most streamed tracks (sum of stream), but only include tracks where danceability > 0.7 and official_video = TRUE.


SELECT
album,
SUM(stream) as total_streams FROM spotify
WHERE danceability > 0.7 AND official_video = TRUE
GROUP BY album
ORDER BY total_streams DESC
LIMIT 3;


--Q12 Identify the artist with the most number of unique albums in the dataset.

SELECT artist,
COUNT(DISTINCT album) as ALBUM_COUNT
FROM spotify
group by artist
order by ALBUM_COUNT DESC
LIMIT 2

--Q13Which track has the lowest acousticness among tracks with valence above the average valence of all tracks?

SELECT 
  track,
  acousticness,
  valence
FROM spotify
WHERE valence > (SELECT AVG(valence) FROM spotify)
ORDER BY acousticness ASC
LIMIT 1;

--Q14Find the top 3 artists whose tracks have the highest average loudness, but only consider tracks with more than 1 million views.

SELECT 
  artist,
  AVG(loudness) AS avg_loudness
FROM spotify
WHERE views > 1000000
GROUP BY artist
ORDER BY avg_loudness DESC
LIMIT 3;

--Q10. Which album has the highest average tempo among albums that have more than 2 tracks?

SELECT album,
AVG(tempo) as AVG_TEMPO,
COUNT(*) AS track_count
FROM spotify
GROUP BY album
HAVING COUNT(*) > 2
ORDER BY AVG_TEMPO DESC 
LIMIT 1

--Q11. Which track has the lowest acousticness among tracks with valence above the average valence of all tracks?

SELECT 
  track,
  acousticness,
  valence
FROM spotify
WHERE valence > (SELECT AVG(valence) FROM spotify)
ORDER BY acousticness ASC
LIMIT 1;

--Q12 Find the top 3 most-viewed tracks for each artist using window functions.


SELECT * 
FROM (
	SELECT
	artist,
	track,
	views,
	Rank() OVER(PARTITION BY artist order by views Desc) as rank
	FROM spotify
	) AS ranked_tracks
where rank <= 3;

--Q13 Write a query to find tracks where the liveness score is above the average.


SELECT 
	track, artist, liveness
FROM spotify
WHERE liveness > (SELECT AVG(liveness) FROM spotify)


--Q15Use a WITH clause to calculate the difference between the highest and lowest energy values for tracks in each album.

WITH news 
AS
(SELECT
 album,
 MAX(energy) as Highest_energy,
 MIN(energy) as Lowest_energy
 FROM spotify
 GROUP BY album
 )
 SELECT album,
 Highest_energy,
 Lowest_energy,
(Highest_energy - Lowest_energy) AS ENERGY_DIFF
FROM news
  