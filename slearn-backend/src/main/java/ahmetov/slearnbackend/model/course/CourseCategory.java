package ahmetov.slearnbackend.model.course;

import javax.persistence.*;
import java.util.List;

@Entity
public class CourseCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    @ManyToMany
    @JoinTable(
            name = "category_course",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "course_category_id")
    )
    private List<Course> courses;
}
