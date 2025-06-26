import { getServerSession } from "next-auth";
import { DiscountForm } from "@/components/shared/DiscountForm";
import Header from "@/components/shared/Header";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const CreateDiscountPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        redirect("/api/auth/signin");
    }

    const userId = session.user.id;

    return (
        <>
            <Header title="Create Discount" />

            <div className="wrapper my-8">
                <DiscountForm userId={userId} type="Create" />
            </div>
        </>
    );
};

export default CreateDiscountPage; 