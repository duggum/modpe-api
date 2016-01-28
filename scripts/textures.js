/*
 * Shamelessly adapted/ripped-off from the script found here:
 *
 * http://zhuoweizhang.net/mcpetexturenames/
 */
(function(window) {
  "use strict";
  var requiredFilesLeft = 4;
  var terrainMetaPath = "meta/terrain.meta";
  var itemMetaPath = "meta/items.meta";
  var terrainImagePath = "images/terrain-atlas.png";
  var itemImagePath = "images/items-opaque.png";
  var terrainImg;
  var itemImg;
  var terrainMeta;
  var itemMeta;

  function makeColgroup(id) {
    var cg = document.createElement("colgroup");
    var col = document.createElement("col");
    col.id = id;
    col.setAttribute("span", 2);
    cg.appendChild(col);
    return cg;
  }

  function makeCell(type, classname, colspan, inner) {
    var cell = document.createElement(type);
    var cols = colspan || 1;
    var ih = inner || "";
    cell.className = classname;
    if (cols > 1) {
      cell.setAttribute("colspan", cols);
    }
    cell.innerHTML = ih;
    return cell;
  }

  function makePicCell(type, classname, colspan, uv, fileName, scale) {
    var x1 = uv[0];
    var y1 = uv[1];
    var x2 = uv[2];
    var y2 = uv[3];
    var imgWidth = uv[4];
    var imgHeight = uv[5];
    var sx = Math.floor(imgWidth * x1 + 0.5);
    var sy = Math.floor(imgHeight * y1 + 0.5);
    var width = Math.floor(imgWidth * x2 + 0.5) - sx;
    var height = Math.floor(imgHeight * y2 + 0.5) - sy;
    var cell = document.createElement(type);
    cell.style.backgroundImage = "url(" + fileName + ")";
    cell.style.width = (scale * width) + "px";
    cell.style.height = (scale * height) + "px";
    cell.style.backgroundSize = (scale * imgWidth) + "px " + (scale * imgHeight) + "px";
    cell.style.backgroundPosition = (scale * -1 * sx) + "px " + (scale * - 1 * sy) + "px";
    cell.className = classname;
    return cell;
  }

  function makeRow(classname) {
    var row = document.createElement("tr");
    row.className = classname;
    return row;
  }

  function makeLinkRow() {
    var row = makeRow("txt__body__link__row");
    row.appendChild(makeCell("td", "top_link", 2,  "-- <a href=\"#top\">Top</a> --"));
    return row;
  }

  function makeBodyRow(image, meta, index) {
    var row = makeRow("txt__body__row");
    var text = meta.name + ", " + index;
    row.appendChild(makeCell("td", "txt__body__cell__name", 1, text));
    row.appendChild(makePicCell("td", "txt__body__cell__pic", 1, meta.uvs[index], image, 4));
    return row;
  }

  function makeHead(type) {
    var head = document.createElement("thead");
    var row = makeRow("txt__head__row");
    row.appendChild(makeCell("th", "txt__head__cell", 2, type + " Textures"));
    head.className = "txt__head";
    head.appendChild(row);
    return head;
  }

  function makeBody(image, meta) {
    var rowCount = 0;
    var body = document.createElement("tbody");
    for (var i = 0; i < meta.length; i++) {
      var m = meta[i];
      for (var j = 0; j < m.uvs.length; j++) {
        rowCount++;
        if (rowCount === 15) {
          body.appendChild(makeLinkRow());
          rowCount = 0;
        }
        body.appendChild(makeBodyRow(image, m, j));
      }
    }
    body.appendChild(makeLinkRow());
    return body;
  }

  function makeTable() {
    var mainDiv = document.getElementById("textures");
    var textureTable = document.createElement("table");
    textureTable.id = "blocks";
    textureTable.className = "texture";
    textureTable.appendChild(makeColgroup("blocks"));
    textureTable.appendChild(makeHead("Block"));
    textureTable.appendChild(makeBody(terrainImagePath, terrainMeta));
    mainDiv.appendChild(textureTable);

    textureTable = document.createElement("table");
    textureTable.id = "items";
    textureTable.className = "texture";
    textureTable.appendChild(makeColgroup("items"));
    textureTable.appendChild(makeHead("Item"));
    textureTable.appendChild(makeBody(itemImagePath, itemMeta));
    mainDiv.appendChild(textureTable);
  }

  function loadedFile() {
    requiredFilesLeft--;
    if (requiredFilesLeft <= 0) {
      makeTable();
    }
  }

  function loadHandler() {
    terrainImg = new Image();
    terrainImg.onload = loadedFile();
    terrainImg.src = terrainImagePath;
    itemImg = new Image();
    itemImg.onload = loadedFile();
    itemImg.src = itemImagePath;
    var terrainMetaRequest = new XMLHttpRequest();
    terrainMetaRequest.onload = function () {
      terrainMeta = JSON.parse(terrainMetaRequest.responseText);
      loadedFile();
    };
    terrainMetaRequest.open("GET", terrainMetaPath);
    terrainMetaRequest.send();
    var itemMetaRequest = new XMLHttpRequest();
    itemMetaRequest.onload = function () {
      itemMeta = JSON.parse(itemMetaRequest.responseText);
      loadedFile();
    };
    itemMetaRequest.open("GET", itemMetaPath);
    itemMetaRequest.send();
  }

  window.onload = loadHandler();
})(window);
