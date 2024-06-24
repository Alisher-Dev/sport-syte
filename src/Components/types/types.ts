interface Default {
  id: number;
  created_at: string;
  updated_at: string;
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
}
