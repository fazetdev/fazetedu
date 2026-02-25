CREATE TABLE schools (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    products JSONB DEFAULT '[]',
    students_count INT DEFAULT 0,
    teachers_count INT DEFAULT 0
);
