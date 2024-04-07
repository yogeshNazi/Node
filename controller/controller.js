const express = require("express")
const Model = require("../model/model")

class InventoryController {
    model = new Model
    GetInventoryData = (req, res) => {
        console.log("inside getinventory");
    }
    UploadInventoryData = (req, res) => {
        const b = Buffer.from(req.file.buffer).toString()
        let csvData = b.split("\n")
        csvData.forEach((row, index)=> {
            if (index == 0) {
                return
            }

            if (row[row.length -1 ] == '\r') {
                row = row.slice(0, -1)
            }
            let data = row.split(",")
            this.model.uploadDataToDB(data)
        });
    }
    UpdateInventoryData = (req, res) => {
        console.log("inside updateinventory");
    }
}

class controller {
    inventoryController = (req,res) => {
        const inventoryController = new InventoryController()
        const action = req.query.action
        switch (action) {
            case 'get': 
                inventoryController.GetInventoryData(req,res)
                break;
            case 'upload':
                inventoryController.UploadInventoryData(req,res)
                break;
            case 'update':
                inventoryController.UpdateInventoryData(req,res)
                break;
            default:
                res.status(404).send("Action not defined");
        }
    }
}

module.exports = controller