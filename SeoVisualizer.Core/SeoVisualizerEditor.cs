using SeoVisualizer;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;


[DataEditor(
    "EnkelMedia.SeoVisualizer",
    ValueEditorIsReusable = true,
    ValueType = "JSON"
)]
public class SeoVisualizerPropertyEditor : DataEditor
{
    private readonly IIOHelper _ioHelper;

    public SeoVisualizerPropertyEditor(
        IDataValueEditorFactory dataValueEditorFactory,
        IIOHelper ioHelper
    ) : base(dataValueEditorFactory)
    {
        _ioHelper = ioHelper;
        DefaultConfiguration = new Dictionary<string, object>()
        {
            { "maxCharsTitle", 0 },
            { "maxCharsDescription", 0 },
            { "titleSuffix", "" },
            { "useNoIndex", false },
        };
    }

    protected override IConfigurationEditor CreateConfigurationEditor() => new SeoVisualizerConfigurationEditor(_ioHelper);
}

/// <summary>
/// 
/// </summary>
/// <remarks>
/// The ConfigurationEditor is kind of optional, but it makes it possible to use code like this:
/// propertyType.DataType.ConfigurationAs<SeoVisualizerPreValueConfiguration>();
/// is the property value converter, the fact that we extend ConfigurationEditorT brings this automatically.
/// Without the ConfigurationEditor the PVC would need to access configuration as a dictionary
/// </remarks>
public class SeoVisualizerConfigurationEditor : ConfigurationEditor<SeoVisualizerPreValueConfiguration>
{

    public SeoVisualizerConfigurationEditor(IIOHelper ioHelper) : base(ioHelper)
    {
    }
}


