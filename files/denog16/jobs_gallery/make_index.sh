#/bin/bash 

GDIR="/Users/tim/Google Drive/Shared drives/AK Veranstaltung/DENOG 16 - 2024/Job Board/02_Job-Beschreibungen-online-zu-stellen/_fertig/"

for i in "$GDIR"/*.pdf; do
  e=`echo "$i" | perl -p -e's#Kopie von ##; s#\ #_#g; s#^.*/##'`
  cp "$i" "$e"
done

for i in *.pdf; do 
  magick convert "$i"[0] "${i}.png"
done

( 
echo "<html><head><title>DENOG16 Job Board</title></head><body>"
echo "<table border=1>"
echo "<tr>"
count=0
for e in *.pdf; do 
  i="${e}.png"
  echo "<td><a target="_blank" href="$e"><img width="300px" src="$i" /></a></td>"
  if [ $(($count % 3)) -eq 2 ]; then
    echo "</tr><tr>"
  fi
  count=$(($count + 1))
done
echo "</tr>"
echo "</table>"
echo "</body></html>"
) > index.html
