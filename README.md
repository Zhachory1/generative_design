# generative_design

## To run

From the top directory (this one this README.md is in), run the following command to bring up a webserver:

```
python3 -m http.server 8080
```

Then you can go to `localhost:8080` or (if you are developing remote like I am) you can find your current IP address using this command:

```
hostname -I | awk '{print $1}'
```

Then going to `<ip address>:8080`. There is no https, obviously, and it's your own server. If you get a warning from browser saying it's unsafe, it's not. It's fine. Lol