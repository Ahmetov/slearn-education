package ahmetov.slearnbackend.model.course;

import javax.persistence.*;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToMany(mappedBy = "courses")
    private List<CourseCategory> courseCategories;

    @OneToMany(mappedBy = "course", orphanRemoval = true)
    private List<TrainingSession> modules;
}
