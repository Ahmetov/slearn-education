package ahmetov.slearnbackend.web;

import ahmetov.slearnbackend.dao.CourseRepository;
import ahmetov.slearnbackend.dao.TrainingSessionPartRepository;
import ahmetov.slearnbackend.dao.TrainingSessionRepository;
import ahmetov.slearnbackend.model.course.Course;
import ahmetov.slearnbackend.model.course.TrainingSession;
import ahmetov.slearnbackend.model.dto.TrainingSessionDto;
import ahmetov.slearnbackend.service.TrainingSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/training-session")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequiredArgsConstructor
public class TrainingSessionController {
    private final TrainingSessionService trainingSessionService;
    private final CourseRepository courseRepository;
    private final TrainingSessionRepository trainingSessionRepository;
    private final TrainingSessionPartRepository trainingSessionPartRepository;

    @PostMapping(path = "/file", consumes = {"multipart/form-data"})
    public TrainingSession saveImage(
            @RequestPart("trainingSession") TrainingSessionDto trainingSessionDto,
            @RequestParam(name = "file", required = false) MultipartFile file) {
        TrainingSession trainingSession = new TrainingSession();
        trainingSession.setTitle(trainingSessionDto.getTitle());
        trainingSession.setDescription(trainingSessionDto.getDescription());
        Optional<Course> byId = courseRepository.findById(trainingSessionDto.getCourseId());
        trainingSession.setCourse(byId.get());
        return trainingSessionService.createAndReturnId(trainingSession, file);
    }

    @GetMapping("/course/{id}")
    public List<TrainingSession> getByCourse(@PathVariable Long id) {
        return trainingSessionService.getByCourseId(id);
    }

    @GetMapping()
    public List<TrainingSession> getAll() {
        return trainingSessionService.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        trainingSessionService.delete(id);
    }

    @PutMapping()
    public void update(@RequestBody TrainingSession trainingSession) {
        trainingSessionService.update(trainingSession);
    }

    @PostMapping("/clean/{id}")
    @Transactional
    public void clean(@PathVariable Long id) {
        TrainingSession byId = trainingSessionRepository.findById(id).get();
        trainingSessionPartRepository.deleteAll(byId.getTrainingSessionParts());
    }
}
