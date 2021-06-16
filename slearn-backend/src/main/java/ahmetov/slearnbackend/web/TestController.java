package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.dao.QuizRepository;
import ahmetov.slearnbackend.dao.TestRepository;
import ahmetov.slearnbackend.model.course.Quiz;
import ahmetov.slearnbackend.model.course.Test;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/test")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class TestController {

    private final TestRepository testRepository;
    private final QuizRepository quizRepository;

    @PostMapping(path = "/file", consumes = {"multipart/form-data"})
    public Test saveImage(
            @RequestPart("test") Test test,
            @RequestParam(name = "file", required = false) MultipartFile file) throws IOException {
        if (file != null) {
            test.setEnemy(file.getBytes());
        }
        return testRepository.save(test);
    }

    @PostMapping(path = "/quiz/add", consumes = {"multipart/form-data"})
    public void addQuiz(
            @RequestPart Quiz quiz) {
        quizRepository.save(quiz);
    }

    @PostMapping(path = "/clean", consumes = {"multipart/form-data"})
    public void clean() {

    }

    @GetMapping("/training/{id}")
    public List<Test> getByTrainingId(@PathVariable Long id) {
        return testRepository.findAllByTrainingSessionId(id);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void delete(@PathVariable Long id) {
        Optional<Test> byId = testRepository.findById(id);
        testRepository.delete(byId.get());
    }

    @PutMapping()
    public void update(@RequestBody Test test) {
        testRepository.save(test);
    }
}
