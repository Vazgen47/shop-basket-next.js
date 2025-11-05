import SingleProduct from "@/components/SingleProduct";

export default async function Product({ params }) {
    const { id } = await params;

    return (
        <SingleProduct id={id} />
    )
}
