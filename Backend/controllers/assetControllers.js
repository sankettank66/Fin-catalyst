const asyncHandler=require('express-async-handler')
const textData =require('../models/textModel')

const getAssets=asyncHandler(async(req, res) => {
    const asset=await textData.find()
    res.status(200).json({ success: true, method: 'GET', message: 'get request',asset });
})
const postAssets=asyncHandler(async(req, res) => {
    if(!req.body.textAsset)
    {
        res.status(400)
        throw new Error('Add body text')
    }
    const assetDATA=await textData.create(
        {
            textAsset:req.body.textAsset
        }
    )

    res.status(200).json({ success: true, method: 'POST', message: 'post request',assetDATA });
})
const putAssets=asyncHandler(async(req, res) => {
    const textAsset=await textData.findById(req.params.id)

    if(!textAsset)
    {
        throw new Error('textAsset Not Found')
    }
    const updatedTextAsset=await textData.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json({ success: true, method: 'PUT', message: `put request at ${req.params.id}`,updatedTextAsset });
})
const deleteAssets=asyncHandler(async(req, res) => {
    const assetsData=await textData.findByIdAndDelete(req.params.id)
    if(!assetsData){
        throw new Error('assetData not found')
    }
    // await assetsData.remove();
    res.status(200).json({ success: true, method: 'DELETE', message: `delete request at ${req.params.id}`,id:req.params.id });
})
const idRequired=asyncHandler(async(req, res)=>{
    res.status(400).json({success:false,message:'id required'})
})

module.exports={
    getAssets,
    postAssets,
    putAssets,
    deleteAssets,
    idRequired
}