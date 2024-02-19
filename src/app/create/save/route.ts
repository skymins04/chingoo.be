import {
  receiptValidationSchema,
  createReceiptDataToDB,
  updateReceiptDataToDB,
} from "@/create-receipt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    if (!body.receiptData) {
      throw new Error("invalid parameters.");
    }
    const parsedBody = receiptValidationSchema.parse(body.receiptData);

    if (body.id) {
      await updateReceiptDataToDB(body.id, parsedBody);
      return NextResponse.json({ success: true, id: body.id });
    } else {
      const id = await createReceiptDataToDB(parsedBody);
      return NextResponse.json({ success: true, id });
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: "Bad Request" },
      { status: 400 },
    );
  }
};
