using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
        DefaultConfiguration = new Dictionary<string, object>() { { "min", 0 }, { "max", 0 } };
    }

    protected override IConfigurationEditor CreateConfigurationEditor() => new SeoVisualizerConfigurationEditor(_ioHelper);
}

/// <summary>
/// 
/// </summary>
/// <remarks>
/// The ConfigurationEditor is kind of optional, but it makes it possible to use code like this:
/// propertyType.DataType.ConfigurationAs<MailingListPickerConfiguration>();
/// is the property value converter, the fact that we extend ConfigurationEditorT brings this automatically.
/// Without the ConfigurationEditor the PVC would need to access configuration as a dictionary
/// </remarks>
public class SeoVisualizerConfigurationEditor : ConfigurationEditor<MailingListPickerConfiguration>
{

    public SeoVisualizerConfigurationEditor(IIOHelper ioHelper) : base(ioHelper)
    {
    }
}

public class MailingListPickerConfiguration
{
    [ConfigurationField("min")]
    public int Min { get; set; }

    [ConfigurationField("max")]
    public int Max { get; set; }
}
