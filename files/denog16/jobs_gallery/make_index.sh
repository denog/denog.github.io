#/bin/bash 

for i in ../jobs/*.pdf; do 
  e=`echo "$i" | perl -p -e's#\ #_#g; s#../jobs/##'`
  mv "$i" "$e"
done

for i in *.pdf; do 
  magick convert "$i" "${i}.png"
done

( 
echo "<html><head><title>DENOG16 Job Board</title></head><body>"
echo "<table border=1>"
echo "<tr>"
count=0
for e in *.pdf; do 
  i="${e}.png"
  echo "<td><a href="$e"><img width="300px" src="$i" /></a></td>"
  if [ $(($count % 3)) -eq 2 ]; then
    echo "</tr><tr>"
  fi
  count=$(($count + 1))
done
echo "</tr>"
echo "</table>"
echo "</body></html>"
) > index.html
