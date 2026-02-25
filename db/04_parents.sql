CREATE TABLE parents (
    id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    children JSONB DEFAULT '[]',
    bookings_count INT DEFAULT 0
);
