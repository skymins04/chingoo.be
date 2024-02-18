import { receiptValidationSchema, saveReceiptDataToDB } from "@/create-receipt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    if (!body.id || !body.receiptData) {
      throw new Error("invalid parameters.");
    }
    const parsedBody = receiptValidationSchema.parse(body.receiptData);

    await saveReceiptDataToDB(body.id, parsedBody);

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Bad Request" },
      { status: 400 },
    );
  }
};
