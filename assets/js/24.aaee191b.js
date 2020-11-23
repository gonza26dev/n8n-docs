(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1092:function(e,t,o){"use strict";o.r(t);var s=o(25),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[e._v("#")]),e._v(" FTP")]),e._v(" "),s("p",[e._v("The FTP node is useful to access and upload files to an FTP server.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credential")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/FTP/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("ul",[s("li",[e._v("Download a file")]),e._v(" "),s("li",[e._v("List contents of a folder")]),e._v(" "),s("li",[e._v("Upload a file")])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" To attach a file for upload, you will need to use an additional node such as the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the file as a data property.")],1),e._v(" "),s("h2",{attrs:{id:"node-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),s("ul",[s("li",[s("em",[s("strong",[e._v("Protocol:")])]),e._v(" A dropdown list to choose between the FTP or SFTP protocol.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Path:")])]),e._v(" A field used to specify the remote path that you would like to connect to.")]),e._v(" "),s("li",[s("em",[s("strong",[e._v("Recursive:")])]),e._v(" A toggle that can be used to include all subdirectories and files.")])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to upload a file to an FTP server and get a list of all files using the FTP node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/663",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("FTP")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(519),alt:"A workflow with the FTP node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-http-request-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node"}},[e._v("#")]),e._v(" 2. HTTP Request node")]),e._v(" "),s("ol",[s("li",[e._v("Enter the URL of the file you want to download in the "),s("em",[s("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Select "),s("em",[s("strong",[e._v("File")])]),e._v(" from the "),s("em",[s("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(520),alt:"Downloading a file with the HTTP Request node"}})]),e._v(" "),s("h3",{attrs:{id:"_3-ftp-node-ftp-upload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ftp-node-ftp-upload"}},[e._v("#")]),e._v(" 3. FTP node (ftp: upload)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the FTP node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/FTP/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Select "),s("em",[s("strong",[e._v("Upload")])]),e._v(" from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the path where you would like to upload the file in the "),s("em",[s("strong",[e._v("Path")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(521),alt:"Uploading a file with the FTP node"}})]),e._v(" "),s("h3",{attrs:{id:"_4-ftp1-node-ftp-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ftp1-node-ftp-list"}},[e._v("#")]),e._v(" 4. FTP1 node (ftp: list)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select "),s("em",[s("strong",[e._v("List")])]),e._v(" from the "),s("em",[s("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the path to the folder where you uploaded the file in the previous step in the "),s("em",[s("strong",[e._v("Path")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(522),alt:"Getting a list of files with the FTP node"}})])])}),[],!1,null,null,null);t.default=a.exports},519:function(e,t,o){e.exports=o.p+"assets/img/workflow.e4bb6051.png"},520:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.fe6d0346.png"},521:function(e,t,o){e.exports=o.p+"assets/img/FTP_node.b29623f4.png"},522:function(e,t,o){e.exports=o.p+"assets/img/FTP1_node.4bedf2dd.png"}}]);