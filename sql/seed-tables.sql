INSERT INTO users(firstname, lastname, email, password)
VALUES
('Hocus','Pocus','hokus@pokus.com','$2b$10$MKuAv.R8GdJbZHMAOeh4fuSvHLbv86PWrANegLoEeT92sHVKlFhGy'),
('Lorraine','Almaden','Lorrain@almaden.com','$2b$10$MKuAv.R8GdJbZHMAOeh4fuSvHLbv86PWrANegLoEeT92sHVKlFhGy'),
('Alucard','Van Heusen','Alucard@heusen.com','$2b$10$MKuAv.R8GdJbZHMAOeh4fuSvHLbv86PWrANegLoEeT92sHVKlFhGy');

INSERT INTO lists(user_id, task, date, start_time, end_time)
VALUES
(1, 'buy milk', 21/03/2021),
(2, 'buy bread', 22/03/2021),
(3, 'buy bananas', 23/03/2021);
