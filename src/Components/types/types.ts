interface Default {
  id: number;
  created_at: string;
  updated_at: string;
}

interface ApiRespons {
  data: IRegion;
}

interface IRegion extends Default {
  descUz: string;
  descRu: string;
  titleUz: string;
  titleRu: string;
  titleTeacherUz: string;
  titleTeacherRu: string;
  descTeacherUz: string;
  descTeacherRu: string;
  image: string;
  teacherImg: string;
  teacherLocation: string;
}

interface IRegionProps extends Default {
  descUz?: string;
  descRu?: string;
  titleUz?: string;
  titleRu?: string;
  titleTeacherUz?: string;
  titleTeacherRu?: string;
  descTeacherUz?: string;
  descTeacherRu?: string;
  image?: string;
  teacherImg?: string;
  teacherLocation?: string;
}

interface IYangilik extends Default {
  titleUz: string;
  titleRu: string;
  contentUz: string;
  contentRu: string;
  fileUrl: string;
}
