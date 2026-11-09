<div align="center">

```text
 █████╗ ██████╗ ██╗  ██╗██╗███╗   ██╗ █████╗ ██╗   ██╗
██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██╔══██╗██║   ██║
███████║██████╔╝███████║██║██╔██╗ ██║███████║██║   ██║
██╔══██║██╔══██╗██╔══██║██║██║╚██╗██║██╔══██║╚██╗ ██╔╝
██║  ██║██████╔╝██║  ██║██║██║ ╚████║██║  ██║ ╚████╔╝ 
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  
```

![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&pause=1000&color=58A6FF&center=true&vCenter=true&width=650&lines=Low-Latency+Systems+%26+Backend+Engineering;Building+data+stores+and+protocols+from+scratch;Zero-framework+first-principles+software)

<br/>

![Student](https://img.shields.io/badge/Diploma-CS%26E-0d1117?style=flat-square&labelColor=1f6feb&color=161b22)
![Focus](https://img.shields.io/badge/Focus-Systems_%26_Backend-0d1117?style=flat-square&labelColor=1f6feb&color=161b22)
![Location](https://img.shields.io/badge/Location-India-0d1117?style=flat-square&labelColor=1f6feb&color=161b22)
![Status](https://img.shields.io/badge/Status-Building_MiniCache-0d1117?style=flat-square&labelColor=238636&color=161b22)

</div>

---

### Terminal Telemetry

```text
+--------------------------------------------------------------------------------+
| OPERATOR    : Abhinav Kishore (@logicbyabhinav)                                |
| DISCIPLINE  : Systems Programming & High-Throughput Backend Architecture       |
| CORE ENGINE : Java 21 LTS (HotSpot) | C++ | Node.js | Linux                    |
| METHODOLOGY : First-Principles Engineering (No Black Boxes)                    |
| TARGETS     : In-Memory Stores · Network Protocols · Portable Tooling          |
| REPO RADAR  : github.com/logicbyabhinav                                        |
+--------------------------------------------------------------------------------+
```

---

### Engineering Manifesto

```
[ Application Layer: Web & Distributed Clients ]
                      |
                      | Raw TCP Streams & Byte Protocols
                      v
[ Systems Middleware: MiniCache / Portable Daemons ]
                      |
                      | O(1) Memory Layout, LRU Sentinels, Collision Chains
                      v
[ Physical Hardware: CPU Cache Lines, RAM Platter & OS Page Cache ]
```

I build backend software by peeling back abstraction layers. Rather than assembling third-party black boxes, I investigate what happens when raw bytes travel across network interfaces and into physical CPU cache lines.

---

### Flagship Systems Projects

```text
+--------------------------------------------------------------------------------+
| 01 // MINICACHE [High-Performance In-Memory Key-Value Cache]                   |
+--------------------------------------------------------------------------------+
| Description : A standalone caching daemon built from scratch in Java 21.       |
|               Speaks the Redis RESP wire protocol over raw TCP sockets.        |
| Mechanics   : • Custom separate chaining hash table with polynomial hashing    |
|               • O(1) LRU eviction via Doubly Linked List with Sentinel bounds  |
|               • Absolute deadline 64-bit epoch TTL with lazy read expiration   |
|               • Thread-safe synchronized core and multi-client worker pool     |
| Tech Stack  : Java 21 · TCP Sockets · Custom Data Structures · Concurrency     |
| Repository  : https://github.com/logicbyabhinav/MiniCache                      |
+--------------------------------------------------------------------------------+
```

```text
+--------------------------------------------------------------------------------+
| 02 // VOLTDRIVE [Zero-Footprint Portable Web File Server]                      |
+--------------------------------------------------------------------------------+
| Description : A self-hosted file management daemon designed to run directly    |
|               off USB flash drives or external storage with zero installation. |
| Mechanics   : • Instant portable web UI for browsing, streaming, and upload   |
|               • Real-time multi-device sync via Server-Sent Events (SSE)       |
|               • Zero system dependency footprint and local filesystem bridging |
| Tech Stack  : Node.js · Express · JavaScript · Server-Sent Events · Systems I/O |
| Repository  : https://github.com/logicbyabhinav/VoltDrive                      |
+--------------------------------------------------------------------------------+
```

```text
+--------------------------------------------------------------------------------+
| 03 // OMNIDRIVE [Client-Side Encrypted Storage Aggregator]                     |
+--------------------------------------------------------------------------------+
| Description : A unified cloud aggregator that pools multiple free storage      |
|               quotas into a single virtual drive without backend servers.      |
| Mechanics   : • Client-side AES-256-GCM cryptographic chunking in the browser  |
|               • Distributed file assembly across independent Google Drive APIs |
|               • Zero server storage liability and 100% user data sovereignty   |
| Tech Stack  : JavaScript · Progressive Web App · Web Crypto API · REST APIs    |
| Repository  : https://github.com/logicbyabhinav/OmniDrive                      |
+--------------------------------------------------------------------------------+
```

```text
+--------------------------------------------------------------------------------+
| 04 // SLIET MARKET [Campus Peer-to-Peer Trading Infrastructure]                |
+--------------------------------------------------------------------------------+
| Description : A high-concurrency campus marketplace tailored for student P2P   |
|               trading, negotiations, and inventory handoffs.                   |
| Mechanics   : • Atomic transaction handling via Firestore Batch Writes         |
|               • Real-time offer bidding state machines and dispute relisting   |
|               • Base64 image payload optimizations under serverless quotas     |
| Tech Stack  : JavaScript · Firebase Firestore · Serverless · Real-Time Web     |
| Repository  : https://github.com/logicbyabhinav/SLIETmarket                    |
+--------------------------------------------------------------------------------+
```

---

### Technical Arsenal

<table>
<tr>
<td valign="top" width="50%">

**Languages & Runtimes**

![Java](https://img.shields.io/badge/Java_21-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</td>
<td valign="top" width="50%">

**Systems, Networking & Tools**

![Data Structures](https://img.shields.io/badge/Algorithms-O(1)_Structures-1f6feb?style=for-the-badge)
![Networking](https://img.shields.io/badge/Networking-TCP_Sockets-238636?style=for-the-badge)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Linux](https://img.shields.io/badge/Environment-Linux_CLI-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

</td>
</tr>
</table>

---

### Telemetry & Activity

<div align="center">

<img height="165em" src="https://github-readme-stats.vercel.app/api?username=logicbyabhinav&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=1f6feb&text_color=c9d1d9"/>
<img height="165em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=logicbyabhinav&layout=compact&langs_count=6&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9"/>

<br/>

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=logicbyabhinav&bg_color=0d1117&color=58a6ff&line=1f6feb&point=58a6ff&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

---

### Dispatch & Coordinates

<div align="center">

[![Email](https://img.shields.io/badge/kishore.abhinav09@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kishore.abhinav09@gmail.com)
[![GitHub](https://img.shields.io/badge/@logicbyabhinav-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/logicbyabhinav)

<br/>

```text
[ EOF // Abhinav Kishore · India · Systems & Backend Engineering ]
```

</div>
