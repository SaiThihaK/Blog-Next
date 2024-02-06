import prismadb from '@/lib/db';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const allCategory = await prismadb.category.findMany({
      include: {
        blog: true,
      },
    });
    return NextResponse.json({
      message: 'Fetch all category successfully',
      data: allCategory,
      success: true,
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json({
      message: 'Internal server error',
      data: null,
      success: false,
    });
  }
};

export const POST = async (request: Request) => {
  try {
    const { category, color } = await request.json();
    const existedCategory = await prismadb.category.findUnique({
      where: { category },
    });
    if (existedCategory) {
      return NextResponse.json({
        message: 'Category already exist',
        data: null,
        success: false,
      });
    }
    await prismadb.category.create({
      data: {
        category,
        color,
      },
    });

    return NextResponse.json({
      message: 'category created successfully',
      data: null,
      success: true,
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({
      message: 'Internal server error',
      data: error,
      success: false,
    });
  }
};

export const PUT = async (request: Request) => {
  try {
    const { id, color, category } = await request.json();
    const updateCategory = await prismadb.category.update({
      where: {
        id: id,
      },
      data: {
        category,
        color,
      },
    });
    if (updateCategory) {
      return NextResponse.json({
        message: 'Updating Complete',
        data: updateCategory,
        success: true,
      });
    }
    return NextResponse.json({
      message: 'Internal server error',
      data: null,
      success: false,
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({
      message: 'Internal server error',
      data: error,
      success: false,
    });
  }
};
