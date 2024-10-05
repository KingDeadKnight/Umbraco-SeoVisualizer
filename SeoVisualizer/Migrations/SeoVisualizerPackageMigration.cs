using SeoVisualizer.Migrations.V_14_0_0;
using Umbraco.Cms.Core.Packaging;
using Umbraco.Cms.Infrastructure.Migrations;

namespace SeoVisualizer.Migrations;

public class SeoVisualizerPackageMigration : MigrationPlan
{
    public SeoVisualizerPackageMigration() : base("Seo Visualizer")
    {
        From(string.Empty)
            .To<RenamePropertyEditorUiAliasMigration>(new Guid("1FF9F663-9D5B-4E53-9477-F25853EAB5C6"));
        
    }
}
