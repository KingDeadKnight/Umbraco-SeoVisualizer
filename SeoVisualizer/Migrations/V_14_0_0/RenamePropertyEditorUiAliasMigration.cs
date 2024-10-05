using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using NPoco;
using Serilog.Core;
using Umbraco.Cms.Core.Configuration.Models;
using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Packaging;
using Umbraco.Cms.Infrastructure.Persistence.Dtos;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Extensions;

namespace SeoVisualizer.Migrations.V_14_0_0;

/// <summary>
/// Rename the PropertyEditorUi property for any data type using our property editors
/// so that it uses the new Property Editor UI
/// </summary>
public class RenamePropertyEditorUiAliasMigration : MigrationBase
{
    private readonly IDataTypeService _dataTypeService;
    private readonly IUserService _userService;

    public RenamePropertyEditorUiAliasMigration(
        IMigrationContext context,
        IDataTypeService dataTypeService,
        IUserService userService
        ) : base(context)
    {
        _dataTypeService = dataTypeService;
        _userService = userService;
    } 

    protected override void Migrate()
    {
        var allDataTypes = _dataTypeService.GetAllAsync().ConfigureAwait(false).GetAwaiter().GetResult();

        var dataTypes = allDataTypes.Where(x => x.EditorAlias == "EnkelMedia.SeoVisualizer").ToList();

        Logger.LogInformation($"SeoVisualizer, migrating {dataTypes.Count} data types.");

        if (dataTypes.Count == 0)
            return;

        var user = _userService.GetAll(0, 1, out long _).First();

        foreach (var datatype in dataTypes)
        {
            datatype.EditorUiAlias = "EnkelMedia.SeoVisualizer.PropertyEditorUi";

            _dataTypeService.UpdateAsync(datatype, user.Key);

        }

        Logger.LogInformation($"SeoVisualizer, data types migration successful");
    }
}
