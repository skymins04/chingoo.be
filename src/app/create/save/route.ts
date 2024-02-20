import { NextResponse } from "next/server";
import { validate } from "superstruct";
import {
  receiptValidationSchema,
  createReceiptDataToDB,
  updateReceiptDataToDB,
} from "@/create-receipt";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    if (!body.receiptData) {
      throw new Error("invalid parameters.");
    }
    const [isInvalid, values] = validate(
      body.receiptData,
      receiptValidationSchema,
    );
    if (isInvalid) {
      throw new Error("invalid parameters.");
    }

    if (body.id) {
      await updateReceiptDataToDB(body.id, values);
      return NextResponse.json({ success: true, id: body.id });
    } else {
      const id = await createReceiptDataToDB(values);
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
