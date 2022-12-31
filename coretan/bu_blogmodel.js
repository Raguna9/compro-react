import Blog from "../models/BlogModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getBlogs = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Blog.findAll({
                attributes: ['uuid', 'tittle', 'content'],
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Blog.findAll({
                attributes: ['uuid', 'tittle', 'content'],
                where: {
                    author: req.author
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!blog) return res.status(404).json({ msg: "Data tidak ditemukan" });
        let response;
        if (req.role === "admin") {
            response = await Blog.findOne({
                attributes: ['uuid', 'tittle', 'content'],
                where: {
                    id: blog.id
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        } else {
            response = await Blog.findOne({
                attributes: ['uuid', 'tittle', 'content'],
                where: {
                    [Op.and]: [{ id: blog.id }, { author: req.author }]
                },
                include: [{
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const createBlog = async (req, res) => {
    const { tittle, content } = req.body;
    try {
        await Blog.create({
            tittle: tittle,
            content: content,
            author: req.author
        });
        res.status(201).json({ msg: "Blog Created Successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!blog) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { tittle, content } = req.body;
        if (req.role === "admin") {
            await Blog.update({ tittle, content }, {
                where: {
                    id: blog.id
                }
            });
        } else {
            if (req.author !== blog.author) return res.status(403).json({ msg: "Akses terlarang" });
            await Blog.update({ tittle, content }, {
                where: {
                    [Op.and]: [{ id: blog.id }, { author: req.author }]
                }
            });
        }
        res.status(200).json({ msg: "Blog updated successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({
            where: {
                uuid: req.params.id
            }
        });
        if (!blog) return res.status(404).json({ msg: "Data tidak ditemukan" });
        const { tittle, content } = req.body;
        if (req.role === "admin") {
            await Blog.destroy({
                where: {
                    id: blog.id
                }
            });
        } else {
            if (req.author !== blog.author) return res.status(403).json({ msg: "Akses terlarang" });
            await Blog.destroy({
                where: {
                    [Op.and]: [{ id: blog.id }, { author: req.author }]
                }
            });
        }
        res.status(200).json({ msg: "Blog deleted successfuly" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}