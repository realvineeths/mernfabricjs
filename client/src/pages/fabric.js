import React from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import '../index.css'
import Navbar from "../components/nav";

export default function Fabric() {
    const { editor, onReady } = useFabricJSEditor();
    const onAddCircle = () => {
      editor.addCircle();
    };
    const onAddRectangle = () => {
      editor.addRectangle();
    };
    const onAddText = () => {
      editor.addText("Type here");
    };
  
    const onAddBackground = (e) => {
      const image = e.target.files[0];
      fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
        editor.canvas.setBackgroundImage(img);
        editor.canvas.renderAll();
      });
    };
  
    const onUploadImage = (e) => {
      const image = e.target.files[0];
      fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
        editor.canvas.add(img);
        editor.canvas.renderAll();
      });
    };
  
    const removeObjectFromCanvas = () => {
      editor.canvas.remove(editor.canvas.getActiveObject());
    };
  
    const downloadImage = () => {
      const ext = "png";
      const base64 = editor.canvas.toDataURL({
        format: ext,
        enableRetinaScaling: true
      });
      const link = document.createElement("a");
      link.href = base64;
      link.download = `eraser_example.${ext}`;
      link.click();
    };
  
    return (
      <>
        <Navbar/>

        <div >
        <button onClick={onAddCircle}>Add circle</button>
        <button onClick={onAddRectangle}>Add Rectangle</button>
        <button onClick={onAddText}>Add Text</button>
        <button onClick={removeObjectFromCanvas}>Remove</button>
        <input type="file" onChange={onAddBackground} />
        <input type="file" multiple onChange={onUploadImage} />
        <button onClick={downloadImage}>to Image</button>
        <FabricJSCanvas className="sample-canvas"  onReady={onReady} />
        </div>      
      
      </>

    );
  }
  