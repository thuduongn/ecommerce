// const formidable = require("formidable")
const { responseReturn } = require("../../utilities/response")
const cloudinary = require('cloudinary').v2
const categoryModel = require('../../models/categoryModel')
const formidable = require("formidable")
const { promisify } = require("util")

class categoryController {
    addCategory = async (req, res) => {
        try {
          const form = formidable({ multiples: true });
          const parseForm = promisify(form.parse).bind(form);
          
          const [fields, files] = await parseForm(req);
          
          console.log('Fields:', fields);
          console.log('Files:', files);
          
          // Process your category data here
          // For example:
          // const newCategory = await Category.create(fields);
          
          res.status(200).json({ message: 'Category added successfully', fields, files });
        } catch (error) {
          console.error('Error in addCategory:', error);
          res.status(500).json({ error: 'An error occurred while adding the category' });
        }
      };
    // addCategory = async (req, res) => {
    //     const form = formidable()
    //     form.parse(req, async(err, fields, files) => {
    //         console.log(fields)
    //         console.log(files)
    //         console.log()
        //     if (err) {
        //         responseReturn(res, 404, { error: 'something went wrong' })
        //     } else {
        //         let {name} = fields
        //         let {image} = files
        //         name = name.trim()
        //         const slug = name.split(' ').join('-')

        //         cloudinary.config({
        //             cloud_name: process.env.cloud_name,
        //             api_key: process.env.api_key,
        //             api_secret: process.env.api_secret,
        //             secure: true
        //         })

        //         try {
        //             const result = await cloudinary.uploader.upload(image.filepath, { folder: 'categories' })
        //             console.log('Cloudinary Result:', result);

        //             if (result) {
        //                 const category = await categoryModel.create({
        //                     name,
        //                     slug,
        //                     image: result.url
        //                 })
        //                 console.log('New Category:', category);

        //                 responseReturn(res, 201, { category, message: 'Category Added Successfully' })

        //             } else {
        //                 responseReturn(res, 404, { error: 'Image Upload Fail' })
        //             }
        //         } catch(error) {
        //             console.error('Error adding category:', error);

        //             responseReturn(res, 500, { error: 'Internal Server Error' })
        //         }

        //     }
        // })
    

    getCategory = async (req, res) => {
        const {page,searchValue, parPage} = req.query 

        try {
            let skipPage = ''
            if (parPage && page) {
                skipPage = parseInt(parPage) * (parseInt(page) - 1)
            }
            if (searchValue && page && parPage) {
                const categories = await categoryModel.find({
                    $text: { $search: searchValue }
                }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({
                    $text: { $search: searchValue }
                }).countDocuments()
                responseReturn(res, 200, {categories, totalCategory })
            } 
            
            else if (searchValue === ' & page & parPage') {
                const categories = await categoryModel.find({ }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({ }).countDocuments()
                responseReturn(res, 200, {categories, totalCategory })
            } 
            
            else {
                const categories = await categoryModel.find({ }).sort({ createdAt: -1 })
                const totalCategory = await categoryModel.find({ }).countDocuments()
                responseReturn(res, 200, {categories, totalCategory })
            }
        } catch(error) {
            console.log(error.message)
        }
    }

    updateCategory = async (req, res) => {
        const form = formidable()
        form.parse(req, async(err, fields, files) => {
            if (err) {
                responseReturn(res, 404, { error: 'something went wrong' })
            } else {
                let {name} = fields
                let {image} = files
                const {id} = req.params;

                name = name.trim()
                const slug = name.split(' ').join('-')

                

                try {
                    let result = null;
                    if(image) {
                        cloudinary.config({
                            cloud_name: process.env.cloud_name,
                            api_key: process.env.api_key,
                            api_secret: process.env.api_secret,
                            secure: true
                        })
                        result = await cloudinary.uploader.upload(image.filepath, { folder: 'categories' })
                    }
                    
                    const updateData = {
                        name,
                        slug,
                    }

                    if (result) {
                        updateData.image = result.url;
                    }

                    const category = await categoryModel.findByIdAndUpdate(id, updateData, { new: true })
                    responseReturn(res, 200, {category, message: 'Category Updated Successfully'})

                } catch(error) {
                    responseReturn(res, 500, { error: 'Internal Server Error' })
                }

            }
        })
    }

    deleteCategory = async (req, res) => {
        try {
            const categoryId = req.params.id;
            const deleteCategory = await categoryModel.findByIdAndDelete(categoryId);
            if (!deleteCategory) {
                return res.status(404).json({ message: 'Category not found' })                
            }
            res.status(200).json({message: 'Category deleted successfully'});
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'});

        }
    }
}

module.exports = new categoryController()