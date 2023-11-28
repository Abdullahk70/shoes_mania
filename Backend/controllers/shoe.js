export const shoeGetController = (req, res) => {
    res.write("Shoe page loading. ");
    res.end();
}
export const shoePostController = (req, res) => {
    console.log(req.body);
}