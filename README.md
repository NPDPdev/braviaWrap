# braviaWrap
>*TypeScript wrapper for the Sony Bravia REST API*<br>


## Why Tho?

My TV remote **sucks**, *and I just found out my TV has API support.*

I'm just a girl who wants a dedicated Plex button, is that so much to ask?<br>
<br>

# Usage
*This is what you're here for.*

```ts
import { bravia } from "./braviawrap/bravia.ts";
var mytv = new bravia("tvIP","tvPSK");        //PSK optional for some models!

console.log(await mytv.system.getCurrentTime());
```
----------
Output:
```yaml //no it's not yaml ya snooper, but JSON makes the whole block red and I'm not troubleshooting a readme
{
  result: [
    {
      dateTime: '2025-08-07T07:02:27-0400',
      timeZoneOffsetMinute: -300,
      dstOffsetMinute: 60
    }
  ],
  id: 1
}

```

`Bravia displays which are not in "PRO MODE" may lack a few features and authentication methods.`

`If your Bravia has GoogleTV instead of AndroidTV, you can not enable it.`


Note: To actually turn on the TV you need to enable [Wake On Lan](https://pro-bravia.sony.net/develop/integrate/ip-control/index.html#wake-on-lan) or keep the TV from sleeping with USB power settings.

<br>

## Detailed Usage (usage but boring)

The Bravia API is split into several "**services**":

`[guide, appControl, audio, avContent, encryption, system, video, videoScreen]`

<br>

### Within these **services**, there are **methods**.
Ex:

**System** contains: `getCurrentTime, setPowerStatus, etc.`

**Audio** contains: `getSoundSettings, setAudioVolume, etc.`
<br><br><br>

#### After creating a "**bravia**" instance, you may use most methods as follows:

```ts
await braviaInst.serviceName.methodName();
```
<br>

#### Each method returns some response in JSON, including the "result" and "id" elements:

```yaml //again not yaml fr did u even read
{
  result: [
    {
      dateTime: '2025-08-07T05:33:20-0400',
      timeZoneOffsetMinute: -300,
      dstOffsetMinute: 60
    }
  ],
  id: 1
}
```
#### OR an error:
```yaml //hi
{ error: [ 3, 'Illegal Argument' ], id: 1 }
```


Finally:
<br><br>

## Resources
**[Here](https://pro-bravia.sony.net/develop/integrate/rest-api/spec/errorcode-list/index.html)** is a list of every Bravia API error code.

**[Here](https://pro-bravia.sony.net/develop/integrate/rest-api/spec/index.html)** is the landing page for the Bravia REST API, which lists every service and method.

They even have a little demo html file you can download.
<br>

#### PLEASE NOTE
The Bravia API docs have some typos, and *some* examples which I suspect may be outdated.
Additionally, because it seems imperfectly maintained, it just sort of straight up lies sometimes.

**Ex:** [getTextForm (v1.1)](https://pro-bravia.sony.net/develop/integrate/rest-api/spec/service/appcontrol/v1_1/getTextForm/index.html) falsely claims that you may request data without encryption.
As far as I can tell, it seems that this was changed when moving from version 1.0 to 1.1. Part of the page is right, but it's waaaay at the bottom and very vague. I figure there's probably more stuff like that I haven't found yet.




<br><br><br><br><br><br><br><br><br><br><br><br>



// This is my first TypeScript project, so beware!

// This is also my first anything project in a while, so double beware!
