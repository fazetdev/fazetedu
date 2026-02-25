CREATE TABLE teachers (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    verified BOOLEAN DEFAULT FALSE,
    earnings NUMERIC DEFAULT 0,
    profile_completion INT DEFAULT 0
);
