package ahmetov.slearnbackend.service.impl;

import ahmetov.slearnbackend.dao.FileDBRepository;
import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.model.course.FileDB;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class FileStorageService {

    private final FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file, Course course) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB fileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
        fileDB.setCourse(course);
        return fileDBRepository.save(fileDB);
    }

    public FileDB getFile(String id) {
        return fileDBRepository.findById(id).get();
    }

    public Stream<FileDB> getAllFiles() {
        return fileDBRepository.findAll().stream();
    }
}